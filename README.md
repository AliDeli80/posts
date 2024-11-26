# Changing Posts with Sidebar

A React application that demonstrates how to manage and display posts dynamically using `componentDidMount` and `componentDidUpdate` lifecycle methods. This project includes a sidebar for navigation between different posts. 

## Features  

- Display a list of posts with a sidebar for easy navigation.
- Utilize React's lifecycle methods to fetch and update posts.
- Responsive design to enhance user experience across devices.

## Getting Started  

To get a local copy of the repository for development and testing purposes, follow these steps:

### Prerequisites  

- Node.js (version)  
- npm (or Yarn)  

### Installation  

1. Clone the repository:  
   ```bash
      git clone https://github.com/AliDeli80/posts.git  
2. Navigate to the project directory:
  ```bash
  cd posts
 ```
3. Install the dependencies:
  ```bash
  npm install
```
or
  ```bash
   yarn install
```
  
## Running the Application
To run the application in development mode, use:
  ```bash
  npm start
```  
or
  ```bash
  yarn start
```
  
The application will be accessible at http://localhost:3000 in your browser.

## Lifecycle Methods

### componentDidMount

- This method is called once the component is mounted. It's typically used for making API calls to fetch data.
- In this project, we use it to load the initial set of posts when the component is rendered.

### componentDidUpdate
- This method is called when the component updates due to state or props changes.
- Here, it is used to update the displayed post content whenever the selected post changes due to user interaction.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch:
  ```bash
  git checkout -b feature/YourFeature
``` 
3. Commit your changes:
  ```bash
  git commit -m "Add some feature"
```  
4. Push to the branch:
  ```bash
  git push origin feature/YourFeature
```  
5. Open a Pull Request.

## License
This project is licensed under the [MIT License](LICENSE).
