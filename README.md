# Marvel db 
a frontend for marvel comics database
http://gateway.marvel.com/v1/public/


## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/laszloekovacs/marvel-db.git
    cd marvel-db
    ```

2. Install dependencies:
    ```bash
    bun install
    ```

3. Set up your environment variables:
    - Create a `.env` file in the root directory.
    - Add your Marvel API public key:
      ```
      VITE_MARVEL_PUBLIC_KEY=your_public_key_here
      ```

4. Start the development server:
    ```bash
    bun run dev
    ```


## Resources

- [Marvel Developer Portal](https://developer.marvel.com/)
- [SWR Documentation](https://swr.vercel.app/docs)
- [TanStack Router](https://tanstack.com/router/latest/docs)


## License

This project is licensed under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).

**Data provided by Marvel. © 2014 Marvel**

[www.marvel.com](https://www.marvel.com)