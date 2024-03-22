const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="h-screen flex justify-center mt-10">
            {children}
        </div>
     );
}
 
export default AuthLayout;{}