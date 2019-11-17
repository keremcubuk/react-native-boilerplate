# NativeBase Integration

NativeBase is a library which help you to styled components with classes like web html usage.

## How to Integrate NativeBase?

1. Install nativebase with `npm i native-base --save`.

2. After install `native-base` run this command. 

    ```shell
    node node_modules/native-base/ejectTheme.js
    ```
3. After ejecting theme move `native-base-theme` folder under `app` folder. And rename it as `theme`.

4. Adding theme under `babel.config.js`. 

    ```javaScript
    module.exports = {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            [
            'module-resolver',
            {
                root: ['./app'],
                alias: {
                    app: './app',
                    theme: './theme',
                    ...
                },
            },
            ],
        ],
    };
    ```

5. After adding babel.config.js, go to file which name `app.js` under `yourApp > app > app.js`. And add `Native Base` as a provider.

    ```javaScript
    import { Root, StyleProvider } from 'native-base';
    import getTheme from 'theme/components';
    import commonColor from 'theme/variables/commonColor';

    function AppRoot() {

      return (
        <StyleProvider style={getTheme(commonColor)}>
          <Root>
              <Provider store={store}>
              <App
                  ref={nav => {
                  this.navigator = nav;
                  }}
              />
              </Provider>
          </Root>
        </StyleProvider>
      );
    }

    export default AppRoot;
    ```

6. Your NativeBase theme is ready to use.


## How to use NativeBase in project?

For Example: in your `<Button>` component.

  ```javaScript
  import { Button, Text } from 'native-base';

  render() {
    return (
      <Button onPress={() => { onPressFunc(); }}>
        <Text>My Button</Text>
      </Button>
    )
  }
  ```

  ## How to change your style with NativeBase?

  For Example: in your `<Button>` component.

    ```javaScript
    import { Button, Text } from 'native-base';

    render() {
      return (
        <Button myClasss onPress={() => { onPressFunc(); }}>
          <Text>My Button</Text>
        </Button>
      )
    }
    ```

  In your theme `Button.js` which is under `yourApp > app > theme > components > Button.js`.

  ```javaScript
  export default (variables /* : * */ = variable) => {
    '.myClass': {
      backgroundColor: 'yellow',
    }
  }
  ```

  For more details: http://nativebase.io/