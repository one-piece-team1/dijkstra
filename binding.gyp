{
	"targets": [
    {
      "target_name": "dijkstra",
      "include_dirs" : [
        "addons",
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "sources": [
        "./addons/greeting.cpp",
        "./addons/index.cpp"
      ],
      "cflags" : [
        "-std=c++17"
      ],
      "cflags!" : [
        "-fno-exceptions"
      ],
      "cflags_cc!": [
        "-fno-rtti",
        "-fno-exceptions"
      ],
      "ldflags" : [
        "-Wl,-rpath,'$$ORIGIN'"
      ],
      "xcode_settings": {
        "OTHER_CFLAGS": [
          "-std=c++17",
          "-stdlib=libc++"
        ],
        "GCC_ENABLE_CPP_EXCEPTIONS": "YES",
        "MACOSX_DEPLOYMENT_TARGET": "10.9"
      },
      "configurations": {
        "Debug": {
          "cflags": ["--coverage"],
          "ldflags": ["--coverage"]
        },
      }
    }
  ]
}
