import { useNavigate } from "react-router-dom";


const Data = ({data}) => {

    const {picture,title,category,card_bg,category_bg,text_button_bg,title_text_color} = data;

    const navigate = useNavigate();

    const handleClick =() => {

      navigate('/details',{state: {data}});


    };

    return (
        <div onClick={handleClick} className="p-4 space-y-4 rounded-xl" style={{backgroundColor:card_bg}}>
          <img src={picture} alt="" />
         <button style={{backgroundColor:text_button_bg}} className=" rounded-lg  px-2 text-base font-semibold text-white">{category}</button>
          <h1 style={{color:title_text_color}} className=" text-xl font-bold">{title}</h1>
        </div>
    );
};

export default Data;