

const Data = ({data}) => {

    const {picture,title,category,card_bg,category_bg,text_button_bg} = data;

    return (
        <div className="p-4 space-y-4 rounded-xl" style={{backgroundColor:card_bg}}>
          <img src={picture} alt="" />
          <h4>{category}</h4>
          <h1>{title}</h1>
        </div>
    );
};

export default Data;