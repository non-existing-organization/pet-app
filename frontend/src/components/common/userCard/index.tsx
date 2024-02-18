import { Badge, Card } from "react-bootstrap";

const SearchResultCard: React.FC<{ user: any }> = ({ user }) => {
    return (
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex align-items-center">
            <div className="mr-3">
              <img src={user.picture} alt="User" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            </div>
            <div>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.summary}</Card.Text>
              <div>
                {Array.from({ length: user.reviews }).map((_, index) => (
                  <i key={index} className="bi bi-star-fill text-warning"></i>
                ))}
              </div>
              <Badge>{`$${user.pricePerDay} per day`}</Badge>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };
  
  export default SearchResultCard;