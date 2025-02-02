#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#elif __has_include("React/RCTBridgeModule.h")
#import "React/RCTBridgeModule.h"
#else
#import "RCTBridgeModule.h"
#endif

@interface ReactNativeConfigModule : NSObject <RCTBridgeModule>

+ (NSString *)decrypt: (NSString *)key (NSString *)seed;

@end
