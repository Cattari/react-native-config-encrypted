#import <Foundation/Foundation.h>

@interface ReactNativeConfigEncrypted : NSObject

+ (NSString *)decrypt: (NSString *)key (NSString *)seed;

@end
