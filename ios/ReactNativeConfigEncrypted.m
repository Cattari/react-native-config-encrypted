#import "ReactNativeConfigEncrypted.h"
#import "AESCrypt-ObjC"

@implementation ReactNativeConfig

+ (NSString *)decrypt: (NSString *)key {
  NSString *value = [AESCrypt decrypt:key password:seed];
  return value;
}

@end
