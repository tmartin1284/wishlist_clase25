export default micomponente(){

     const FullName = ({ name, surname }) => {
          const [fullName, setFullName] = useState();
          useEffect(() => {
               setFullName(`${name} ${surname}`);
          }, [name, surname]);
          return <div>Hello {fullName}</div>;
     };


}