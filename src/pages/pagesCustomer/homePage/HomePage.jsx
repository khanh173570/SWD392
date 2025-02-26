import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

import img1 from "../../../assets/asstetsCustomer/ar1.jpg";
import img2 from "../../../assets/asstetsCustomer/ar2.jpg";
import img3 from "../../../assets/asstetsCustomer/ar3.jpg";
import img4 from "../../../assets/asstetsCustomer/ar4.jpg";
import img5 from "../../../assets/asstetsCustomer/ar5.jpg";
import img6 from "../../../assets/asstetsCustomer/ar6.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("HomePage component mounted!");
  }, []);

  const cardData = [
    {
      id: 1,
      image: img1,
      title: "15 Signs You Are in a Stable Relationship & Ways to Maintain It",
      author: "Approved By John Doe",
    },
    {
      id: 2,
      image: img2,
      title: "10 Reasons Why You Need to Break Down Walls in Your Marriage",
      author: "Approved By Emily Smith",
    },
    {
      id: 3,
      image: img3,
      title: "10 Essential Marriage Vows for a Happy & Fulfilling Relationship",
      author: " Approved ByMichael Johnson",
    },
    {
      id: 4,
      image: img4,
      title: "7 Ways of Handling Social Anxiety at Your Wedding Reception",
      author: "Approved BySarah Williams",
    },
    {
      id: 5,
      image: img5,
      title: "How to Manage Healthy Expectations in a Relationship: 7 Tips",
      author: "Approved By David Brown",
    },
    {
      id: 6,
      image: img6,
      title:
        "Saving Money for Your Marriage: 5 Practical Tips to Cut Wedding Costs",
      author: "Approved By Sophia Martinez",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="home mt-4 container-sm">
        {/* <Row className="gy-4" style={{ maxWidth: "800px", margin: "0 auto" }}> */}
        <Row
          className="gy-3 gx-3"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          {cardData.map((item) => (
            <Col md={4} key={item.id}>
              <Card
                className="custom-card"
                onClick={() => handleCardClick(item.id)}
              >
                <motion.div className="card-image-container">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.div
                  className="card-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card.Body className="card-body">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text className="author">
                      <strong>Author:</strong> {item.author}
                    </Card.Text>
                  </Card.Body>
                </motion.div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default HomePage;
