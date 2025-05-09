# GSAP Animation Practice Project

This project is a playground for practicing GSAP (GreenSock Animation Platform) animations using Next.js and React. It serves as a learning environment for mastering web animations and interactive experiences.

## Tech Stack

- Next.js 15.3.2
- React 19.0.0
- GSAP 3.13.0
- TypeScript
- Tailwind CSS

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
yarn install
```
1. Run the development server:
``` bash
yarn dev
```
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
The project is organized to facilitate GSAP animation practice:
- - Next.js application pages and components `app/`
- `components/` - Reusable React components with GSAP animations
- `styles/` - Global styles and Tailwind CSS configuration

## Available GSAP Features
This project includes GSAP 3.13.0 with access to:
- Basic Tweens
- Timelines
- ScrollTrigger
- Basic Eases
- Transform Properties
- CSS Properties

## Development Guidelines
1. Each animation should be properly cleaned up using cleanup function `useEffect`
2. Use GSAP's `gsap.context()` for better component isolation
3. Implement animations following React best practices
4. Utilize TypeScript for type-safe animations

## Learning Resources
- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP with React Guide](https://greensock.com/react)
- [Next.js Documentation](https://nextjs.org/docs)

## Contributing
Feel free to:
- Create new animation examples
- Improve existing animations
- Add documentation
- Share interesting animation techniques

## License
This is a personal practice project. Feel free to use it as reference for your own learning
