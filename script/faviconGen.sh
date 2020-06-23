#!/usr/bin/env bash

magick convert $1 -resize 16x16 16.png
magick convert $1 -resize 32x32 32.png
magick convert $1 -resize 48x48 48.png

magick convert 16.png 32.png 48.png favicon.ico