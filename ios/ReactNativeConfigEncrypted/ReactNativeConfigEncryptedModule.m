#import "ReactNativeConfigEncrypted.h"
#import "ReactNativeConfigEncryptedModule.h"

@implementation ReactNativeConfigModule

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

+ (NSString *)decrypt: (NSString *)key (NSString *)seed {
  return [ReactNativeConfig decrypt:key seed:seed];
}

@end
