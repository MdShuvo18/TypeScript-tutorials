# React + TypeScript Basic

## Setup

```sh
npm create vite@latest react-typescript -- --template react-ts
```

# React & Typescript

- .tsx - file extension

## 01 - Component Return

- TypeScript infers JSX.Element, helps if no return

```tsx
// TypeScript infers JSX.Element
// this will trigger error
function Component() {}
export default Component;
```

- set function return type

```tsx
function Component(): JSX.Element | null | string {
  return null;
  return 'hello';
  return <h2>hello from typescript</h2>;
}
export default Component;
```

## 02- Props

```tsx
function App() {
  return (
    <main>
      <Component name='peter' id={123} />
    </main>
  );
}

export default App;
```

- inline types

```tsx
function Component({ name, id }: { name: string; id: number }) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>ID : {id}</h1>
    </div>
  );
}
export default Component;
```

- type or interface
- props object or {}

```tsx
type ComponentProps = {
  name: string;
  id: number;
};

function Component({ name, id }: ComponentProps) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>ID : {id}</h1>
    </div>
  );
}
export default Component;
```

- children prop

```tsx
function App() {
  return (
    <main>
      <Component name='peter' id={123}>
        <h2>hello world</h2>
      </Component>
    </main>
  );
}

export default App;
```

- React.ReactNode
- PropsWithChildren

```tsx
import { type PropsWithChildren } from 'react';

type ComponentProps = {
  name: string;
  id: number;
  children: React.ReactNode;
};

// type ComponentProps = PropsWithChildren<{
//   name: string;
//   id: number;
// }>;

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h2>ID : {id}</h2>
      {children}
    </div>
  );
}
export default Component;
```

## 03 - State

- typescript infers primitive types
- by default [] is type never

```tsx
import { useState } from 'react';

function Component() {
  const [text, setText] = useState('shakeAndBake');
  const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);

  return (
    <div>
      <h2 className='mb-1'>hello from typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          // setText(1);
          // setNumber('hello');
          // setList([1, 3]);
          setList(['hello', 'world']);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
```

```tsx
import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: 'https://reactjs.org',
    text: 'react docs',
  },
  {
    id: 2,
    url: 'https://reactrouter.com',
    text: 'react router docs',
  },
  {
    id: 3,
    url: 'https://reacttraining.com',
    // remove text property to see the error
    text: 'react training',
  },
];

function Component() {
  const [text, setText] = useState('shakeAndBake');
  const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className='mb-1'>hello from typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          // setText(1);
          // setNumber('hello');
          // setList([1, 3]);
          // setList(['hello', 'world']);
          // setLinks([...links, { id: 4, url: 'hello', someValue: 'hello' }])
          setLinks([...links, { id: 4, url: 'hello', text: 'hello' }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
```

```tsx

```

## 04 - Events

- inline function infers object type

When you provide the exact HTML element type in the angle brackets (<>), like HTMLInputElement in your case, you're telling TypeScript exactly what kind of element the event is coming from. This helps TypeScript provide accurate suggestions and error checking based on the properties and methods that are specific to that kind of element. For example, an HTMLInputElement has properties like value and checked that other elements don't have. By specifying the exact element type, TypeScript can help you avoid mistakes and write safer code.

```tsx
import { useState } from 'react';

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <section>
      <h2>events example</h2>
      <form className='form'>
        <input
          className='form-input mb-1'
          type='text'
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;
```

```tsx
import { useState } from 'react';

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    // const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData);
    // console.log(data)
    const text = formData.get('text') as string;
    const person: Person = { name: text };
  };

  return (
    <section>
      <h2>events example</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='form-input mb-1'
          type='text'
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange}
          name='email'
        />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;