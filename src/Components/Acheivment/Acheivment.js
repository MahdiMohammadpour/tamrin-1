const Acheivment = ({title,text,image}) => {
    return ( 
        <div className="flex justify-content-center">
            <div>
                <img src={image} className="w-20"/>
            </div>
            <div className="mr-2">
                <h2 className="font-semibold">{title}</h2>
                <p className="w-60 mt-1 text-sm text-gray-500 ">{text}</p>
            </div>
        </div>
     );
}
 
export default Acheivment;