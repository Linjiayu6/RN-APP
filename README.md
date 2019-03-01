[Reference]
- https://juejin.im/post/5a9f93d96fb9a028d2077c19

[Setup]
- react-native start
- react-native run-ios (new window)

[Install Native dependencies]
- react-native link
  
  react-native link is an automatic way for installing native dependencies. It is an alternative to manually linking the dependency in your project. It works for both Android and iOS.

  eg: react-native link @shoutem/ui

[Problems]
1. No bundle URL present.
   https://blog.csdn.net/c_kite/article/details/79215023
   rm -r ios/build
   react-native start
   react-native run-ios (new window)

[Lib]
1. lottie
   http://airbnb.io/lottie/react-native/react-native.html#getting-started
   
   - react-native link lottie-ios
   - react-native link lottie-react-native