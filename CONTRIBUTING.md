# Contributing to Modern Landing Page Demo

Thank you for your interest in contributing! We appreciate your help in making this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Development Guidelines](#development-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/landing-page-demo.git
   cd landing-page-demo
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes**
- ✨ **New features**
- 📝 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- ♿ **Accessibility improvements**
- 🧪 **Tests**
- 🔧 **Code refactoring**

### Before You Start

1. **Check existing issues** to avoid duplicate work
2. **Open an issue** to discuss significant changes before starting
3. **Keep changes focused** - one feature/fix per pull request

## 🔄 Pull Request Process

1. **Update your fork** with the latest changes from main:
   ```bash
   git checkout main
   git pull upstream main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following our development guidelines

4. **Test your changes** thoroughly:
   ```bash
   npm run dev      # Test in development
   npm run build    # Ensure production build works
   npm run preview  # Preview production build
   ```

5. **Commit your changes** with clear, descriptive messages:
   ```bash
   git add .
   git commit -m "Add feature: description of your changes"
   ```

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request** on GitHub with:
   - Clear title and description
   - Reference to related issues (if any)
   - Screenshots/GIFs for UI changes
   - List of changes made

## 💻 Development Guidelines

### Code Style

- Use **functional components** with hooks
- Follow **React best practices**
- Maintain **consistent formatting**
- Write **clear, self-documenting code**
- Add **comments** for complex logic

### Component Guidelines

- Keep components **small and focused**
- Use **meaningful names**
- Extract **reusable logic** into custom hooks
- Follow the **single responsibility principle**

### CSS Guidelines

- Use **CSS variables** for theming
- Keep styles **modular** and component-specific
- Support both **light and dark modes**
- Ensure **responsive design**

### Commit Messages

Follow this format:
```
type: brief description

Detailed explanation if needed
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat: add contact form component
fix: resolve mobile menu alignment issue
docs: update installation instructions
```

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description** of the bug
2. **Steps to reproduce**
3. **Expected behavior**
4. **Actual behavior**
5. **Screenshots** (if applicable)
6. **Environment details**:
   - Browser and version
   - Operating system
   - Node.js version

## 💡 Suggesting Features

We love new ideas! When suggesting features:

1. **Check existing issues** to avoid duplicates
2. **Clearly describe** the feature and its benefits
3. **Provide use cases** or examples
4. **Discuss implementation** if you have ideas

## 🧪 Testing

Before submitting a pull request:

1. Test your changes in **development mode**
2. Verify the **production build** works
3. Test on **different browsers** (Chrome, Firefox, Safari, Edge)
4. Check **mobile responsiveness**
5. Verify **accessibility** features

## 📞 Getting Help

- **Questions?** Open a discussion or issue
- **Stuck?** Ask for help in your pull request
- **Ideas?** Share them in the issues section

## 🎉 Recognition

Contributors will be recognized in our README and release notes. Thank you for helping make this project better!

## 📝 License

By contributing, you agree that your contributions will be licensed under the MIT License.
