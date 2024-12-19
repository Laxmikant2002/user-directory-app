# User Directory App

This is a React Native application that serves as a user directory, fetching user data from the JSONPlaceholder API. The app features user details navigation, infinite scrolling, and error handling.

## Features

- **User List**: Displays a list of users fetched from the API.
- **User Details**: Navigate to a detailed view of each user, including their address and company information.
- **Infinite Scrolling**: Automatically fetch more users as you scroll to the bottom of the list.
- **Error Handling**: Gracefully handles loading states and errors during data fetching.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd user-directory-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

1. Start the Metro bundler:
   ```bash
   npx react-native start
   ```

2. Run the app on an Android emulator or device:
   ```bash
   npx react-native run-android
   ```

3. Run the app on an iOS simulator or device (macOS only):
   ```bash
   npx react-native run-ios
   ```

## Challenges Faced

- **Dependency Conflicts**: Encountered issues with dependency conflicts, particularly with `react-navigation` and `react-native-screens`. Resolved by using the `--legacy-peer-deps` flag during installation.
- **TypeScript Errors**: Faced several TypeScript errors related to implicit `any` types and missing type declarations. Addressed these by explicitly typing parameters and creating custom declaration files.
- **Error Handling**: Implemented robust error handling to manage API fetch failures and display appropriate error messages to the user.

By following these instructions, you should be able to set up and run the User Directory App on your local machine. If you encounter any issues, please refer to the troubleshooting steps in the terminal output or consult the React Native documentation.
```

## Usage

- Launch the app on your preferred simulator or device.
- The main screen will display a list of users.
- Tap on a user to view their details.
- Scroll down to load more users automatically.

## Technologies Used

- React Native
- TypeScript
- React Navigation
- Axios for API requests

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.
