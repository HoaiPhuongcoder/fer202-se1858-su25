type typeCardProps = {
  name: string;
  image: string;
  description: string;
  price: string;
};

function Card({ name, price, description, image }: typeCardProps) {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">Dịch Vụ</div>
        <img src={image} className="card-img-top " alt="ảnh đẹp"></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Price: {price}</p>
          <a href="#" className="btn btn-primary">
            Đặt Lịch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
