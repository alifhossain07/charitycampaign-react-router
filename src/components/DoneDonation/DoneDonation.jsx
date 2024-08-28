

const DoneDonation = ({donation}) => {

    const {picture, title, description, price,title_text_color,card_bg,text_button_bg,category} = donation;
    return (
        <div className="md:w-3/4 p-4 space-y-4 rounded-xl w-full" style={{backgroundColor:card_bg}}>
          <img className="w-full" src={picture} alt="" />
          <button style={{backgroundColor:text_button_bg}} className=" rounded-lg  px-2 text-base font-semibold text-white">{category}</button>
          <h1 style={{color:title_text_color}} className=" text-xl font-bold">{title}</h1>
          <p className="font-bold text-xl">{price}</p>
        </div>
    );
};

export default DoneDonation;


               