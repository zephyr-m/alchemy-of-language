#!/usr/bin/env bash

set -Eeuo pipefail

readonly PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
readonly AAPT2_VERSION="8.13.0-13719691"
readonly AAPT2_TARGET="$HOME/.local/share/engapp-tools/aapt2"

cd "$PROJECT_DIR"

AAPT2_SOURCE="$(find "$HOME/.gradle/caches" \
  -type f \
  -path "*${AAPT2_VERSION}*" \
  -name aapt2 \
  -print -quit)"

if [[ -z "$AAPT2_SOURCE" ]]; then
  echo "Не найден AAPT2 ${AAPT2_VERSION} в кэше Gradle." >&2
  echo "Сначала запусти обычную Android-сборку один раз, чтобы Gradle его скачал." >&2
  exit 1
fi

mkdir -p "$(dirname -- "$AAPT2_TARGET")"
cp "$AAPT2_SOURCE" "$AAPT2_TARGET"
chmod u+wx "$AAPT2_TARGET"

export ENGAPP_AAPT2_TARGET="$AAPT2_TARGET"

nix-shell -E '
let pkgs = import <nixpkgs> {};
in pkgs.mkShell {
  packages = [ pkgs.patchelf ];
  AAPT2_INTERPRETER =
    pkgs.lib.fileContents "${pkgs.stdenv.cc}/nix-support/dynamic-linker";
  AAPT2_RPATH =
    pkgs.lib.makeLibraryPath [
      pkgs.glibc
      pkgs.stdenv.cc.cc.lib
      pkgs.zlib
    ];
}
' --run '
  patchelf --set-interpreter "$AAPT2_INTERPRETER" "$ENGAPP_AAPT2_TARGET"
  patchelf --add-rpath "$AAPT2_RPATH" "$ENGAPP_AAPT2_TARGET"
'

"$AAPT2_TARGET" version

npm run android:sync

(
  cd android
  ./gradlew assembleDebug \
    "-Pandroid.aapt2FromMavenOverride=$AAPT2_TARGET"
)

readonly APK_PATH="$PROJECT_DIR/android/app/build/outputs/apk/debug/app-debug.apk"

if [[ -f "$APK_PATH" ]]; then
  echo
  echo "APK готов: $APK_PATH"
fi
