# Zellular-Ui

This project is a React-based UI library developed with Vite. It aims to provide a flexible, high-performance, and visually appealing user interface for decentralized applications.

## Features

- **Flexible Development**: Enables developing decentralized apps using high-level programming languages.
- **Rapid Finality**: Achieves state finalization in under a second.
- **High Throughput**: Supports +100k transactions per second per zApp, and unlimited throughput across the system.
- **Dynamic Security**: Enables dynamic security by specifying the amount of restaked ETH required for running nodes.

## Recent Improvements

### SVG Loading Performance

- **Lazy Loading**: Implemented lazy loading for SVG images to defer loading until they are in the viewport.
- **Optimization**: Ensured efficient caching and server performance for faster image load times.
- **Code Refactor**: Optimized component structure for better readability and maintainability.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/AzamHosseinian/Zellular-Ui.git
cd Zellular-Ui
npm install
```

## Running the Project

To start the development server, run:

```bash
npm run dev
```

This will launch the application and you can view it in your browser at `http://localhost:3000`.

## Building for Production

To build the project for production, run:

```bash
npm run build
```

This will create an optimized build in the `dist` folder.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to improve the project.

## License

This project is licensed under the MIT License.
