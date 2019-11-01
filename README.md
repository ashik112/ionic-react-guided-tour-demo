# ionic-react-guided-tour

Guided Tour in Ionic-React

## Dependency

[Reactour](https://github.com/elrumordelaluz/reactour)

## Install in Your Project

```bash
npm i -S reactour
npm i -S styled-components@^4.0.0
```

### Install type definitions if required

```bash
npm i -S @types/reactour
npm i -S @types/styled-components@^4.0.0
```

## Documentation

Follow [Reactour](https://github.com/elrumordelaluz/reactour)'s doc

## Usage

If you need to reset Tour step, write it like this

```javascript
{
    tourOpen &&
    <Tour
    steps={steps}
    isOpen={tourOpen}
    onRequestClose={() => setTourOpen(false)}
    />
}
```
