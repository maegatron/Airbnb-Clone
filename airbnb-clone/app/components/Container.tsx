'use client';

interface ContainerProps{
    children: React.ReactNode;
}
/*In TypeScript, interface is a way to define the shape of an object.
Here, ContainerProps is an interface that describes the properties (or "props") that the Container component will accept.
children: React.ReactNode means that the Container component expects a prop called children, which is of type React.ReactNode.
React.ReactNode is a type that represents anything that can be rendered in React: elements, strings, numbers, or even null or undefined.*/

const Container: React.FC<ContainerProps> = ({children}) => {
    return(
        <div
            className="
            max-w-[2520px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-2
            px-4
            "
        >
            {children}
        </div>
    );
}
/* React.FC (short for "React Functional Component") is a type provided by React that defines the component as a functional component.
The <ContainerProps> part tells TypeScript that this component expects props that match the ContainerProps interface.
({ children }): This is the function parameter syntax where we’re using destructuring to extract children from the props object directly, instead of writing props.children.
*/

export default Container;