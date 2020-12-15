#include <napi.h>
#include <string>
#include "greeting.h"

Napi::String greet(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  std::string result = helloWorld("lib");

  return Napi::String::New(env, result);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(
    Napi::String::New(env, "greet"),
    Napi::Function::New(env, greet)
  );

  return exports;
}

NODE_API_MODULE(dijkstra, Init)