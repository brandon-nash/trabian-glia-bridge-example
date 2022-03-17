#import <Foundation/Foundation.h>
#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

#import <Expo/Expo.h>

#import <SalemoveSDK/SalemoveSDK.h>

@interface AppDelegate : EXAppDelegateWrapper <RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;
@property (nonatomic, strong) SalemoveAppDelegate * appDelegate;

@end
