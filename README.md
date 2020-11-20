<img src="http://www.keremcubuk.com/wp-content/uploads/2019/11/banner.png" alt="react boilerplate banner" align="center" />

<br />

<div align="center"><strong>Start your next react native project in seconds</strong></div>
<div align="center">A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices</div>

<br />

<div align="center">
  <a href="https://github.com/keremcubuk/react-native-boilerplate/blob/master/LICENSE.md">
    <img alt="GitHub license" src="https://img.shields.io/github/license/keremcubuk/react-native-boilerplate">
  </a>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/keremcubuk/react-native-boilerplate">
    <img src="https://david-dm.org/keremcubuk/react-native-boilerplate/status.svg" alt="Dependency Status" />
  </a>

  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/keremcubuk/react-native-boilerplate">

  <!-- Pull Request Status -->
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />

  <!-- Discord -->
  <img alt="Discord" src="https://img.shields.io/discord/751550248069103676?label=discord&color=7389D8&logo=discord">


</div>

<br />

<div align="center">
  <sub>Created by <a href="https://twitter.com/mxstbr">Kerem Çubuk</a> and maintained with ❤️ by an amazing idea reinforced with <a href="https://github.com/react-boilerplate/react-boilerplate">react-boilerplate</a>.</sub>
</div>

<br />

### Website: <a href="https://reactnativeboilerplate.dev/">reactnativeboilerplate.dev</a>


### Motivation: 
While creating this project, I always need to a react-native standart for our team. When we start to new project, we always spend too much time. So that, we created [`react-native-boilerplate`](https://reactnativeboilerplate.dev/) and we wanted to share with the community.

## Features

<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more.</dd>
<!-- 
  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd> -->

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.</dd>

  <dt>Static code analysis</dt>
  <dd>Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.</dd>

</dl>

But wait... there's more!

- _The best test setup:_ Automatically guarantee code quality and non-breaking
  changes. (Seen a react-native app with 100% test coverage before?)
- _The fastest fonts:_ Say goodbye to vacant text.
- _Stay fast_: Profile your app's performance from the comfort of your command
  line!
<!-- - _Catch problems:_ AppVeyor and TravisCI setups included by default, so your
  tests get run automatically on Windows and Unix. -->

<!-- There’s also a <a href="https://vimeo.com/168648012">fantastic video</a> on how to structure your React.js apps with scalability in mind. It provides rationale for the majority of boilerplate's design decisions. -->

<sub><i>Keywords: React Native, React.js, Redux, Fast Refresh, ESNext, Babel, react-navigation, Offline First, ServiceWorker, redux-saga</i></sub>

## Quick start

#### 1. Clone repository
 ```command
git clone --depth=1 https://github.com/keremcubuk/react-native-boilerplate.git <YOUR_PROJECT_NAME>
```

#### 2.  Move to the appropriate directory:
```command
cd <YOUR_PROJECT_NAME>
```

#### 3. Rename the project: 

```command
npx react-native-rename <YOUR_PROJECT_NAME>
```

> Note: Before `npm install`

#### 4. Android and iOS runnning is different. So that follow the steps below.

<b>IOS</b>:

```command
npx pod-install # to install pod dependencies
npm run ios     # to run the iOS application
```

<b>Android</b>:

```command
# Make sure the ANDROID_HOME environment variable is configured properly

npm run android # to run the Android application
```

Start the server:
```command
npm start
```

Now you're ready to rumble!

<br/>

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

## Documentation

- [**The Hitchhiker's Guide to `react-native-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.
<!-- - [Styling](docs/css): How to work with the CSS tooling -->

## Contributors

Contributions of any kind welcome!


## License

This project is licensed under the MIT license, Copyright (c) 2020 Kerem Çubuk. For more information see `LICENSE.md`.
