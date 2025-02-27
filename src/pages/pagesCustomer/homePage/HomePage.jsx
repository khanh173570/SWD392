import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
  const [showAllCards, setShowAllCards] = useState(false);
  const [showAllAdvice, setShowAllAdvice] = useState(false);

  useEffect(() => {
    console.log("HomePage component mounted!");
  }, []);

  const adviceItems = [
    {
      id: 1,
      title: "Stable Relationship Tips",
      image: img1,
      subItems: [
        { id: 101, title: "Building Trust in Relationships" },
        { id: 102, title: "How to Improve Communication" },
        { id: 103, title: "Maintaining Long-term Happiness" },
      ],
    },
    {
      id: 2,
      title: "Break Down Walls in Marriage",
      image: img2,
      subItems: [
        { id: 201, title: "Overcoming Emotional Barriers" },
        { id: 202, title: "Dealing with Past Trauma" },
        { id: 203, title: "How to Express Love Daily" },
      ],
    },
    {
      id: 3,
      title: "Essential Marriage Vows",
      image: img3,
      subItems: [
        { id: 301, title: "Understanding the Meaning of Vows" },
        { id: 302, title: "Creating Personalized Vows" },
        { id: 303, title: "How to Keep Your Promises" },
      ],
    },
    {
      id: 4,
      title: "Handling Social Anxiety at Your Wedding",
      image: img4,
      subItems: [
        { id: 401, title: "Coping Strategies for Anxiety" },
        { id: 402, title: "Mindfulness Techniques for Stress" },
        { id: 403, title: "Building Confidence in Public" },
      ],
    },
    {
      id: 55,
      title: "Stable Relationship Tips",
      image: img1,
      subItems: [
        { id: 101, title: "Building Trust in Relationships" },
        { id: 102, title: "How to Improve Communication" },
        { id: 103, title: "Maintaining Long-term Happiness" },
      ],
    },
    {
      id: 66,
      title: "Break Down Walls in Marriage",
      image: img2,
      subItems: [
        { id: 201, title: "Overcoming Emotional Barriers" },
        { id: 202, title: "Dealing with Past Trauma" },
        { id: 203, title: "How to Express Love Daily" },
      ],
    },
    {
      id: 7,
      title: "Essential Marriage Vows",
      image: img3,
      subItems: [
        { id: 301, title: "Understanding the Meaning of Vows" },
        { id: 302, title: "Creating Personalized Vows" },
        { id: 303, title: "How to Keep Your Promises" },
      ],
    },
    {
      id: 8,
      title: "Handling Social Anxiety at Your Wedding",
      image: img4,
      subItems: [
        { id: 401, title: "Coping Strategies for Anxiety" },
        { id: 402, title: "Mindfulness Techniques for Stress" },
        { id: 403, title: "Building Confidence in Public" },
      ],
    },
  ];

  const handleSubItemClick = (id) => {
    navigate(`/details/${id}`);
  };

  const cardData = [
    {
      id: 1,
      image: img1,
      title: "15  Signs You Are in a Stable Relationship & Ways to Maintain It",
      author: "John Doe",
    },
    {
      id: 2,
      image: img2,
      title: "10 Reasons Why You Need to Break Down Walls in Your Marriage",
      author: "Emily Smith",
    },
    {
      id: 3,
      image: img3,
      title: "7 Ways of Handling Social Anxiety at Your Wedding Reception",
      author: "Michael Johnson",
    },
    {
      id: 4,
      image: img4,
      title: "How to Manage Healthy Expectations in a Relationship: 7 Tips",
      author: "Sarah Williams",
    },
    {
      id: 5,
      image: img5,
      title: "How to Manage Healthy Expectations in a Relationship",
      author: "David Brown",
    },
    {
      id: 6,
      image: img6,
      title: "Saving Money for Your Marriage",
      author: "Sophia Martinez",
    },
    {
      id: 7,
      image: img1,
      title: "15  Signs You Are in a Stable Relationship & Ways to Maintain It",
      author: "John Doe",
    },
    {
      id: 8,
      image: img2,
      title: "10 Reasons Why You Need to Break Down Walls in Your Marriage",
      author: "Emily Smith",
    },
    {
      id: 9,
      image: img3,
      title: "7 Ways of Handling Social Anxiety at Your Wedding Reception",
      author: "Michael Johnson",
    },
    {
      id: 10,
      image: img4,
      title: "How to Manage Healthy Expectations in a Relationship: 7 Tips",
      author: "Sarah Williams",
    },
    {
      id: 11,
      image: img5,
      title: "How to Manage Healthy Expectations in a Relationship",
      author: "David Brown",
    },
    {
      id: 12,
      image: img6,
      title: "Saving Money for Your Marriage",
      author: "Sophia Martinez",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleAdviceClick = (id) => {
    navigate(`/advice/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Container className="home mt-4 container-sm">
        <Row
          className="gy-3 gx-3"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          {(showAllCards ? cardData : cardData.slice(0, 6)).map((item) => (
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
                    <Card.Text className="author">
                      <strong>Author:</strong> {item.author}
                    </Card.Text>
                  </Card.Body>
                </motion.div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-3">
          <Button
            className="button-view"
            onClick={() => setShowAllCards(!showAllCards)}
          >
            {showAllCards ? "Hide" : "View more option"}
          </Button>
        </div>

        <motion.div
          className="advice"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Row
            className="gy-3 gx-3"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            {(showAllAdvice ? adviceItems : adviceItems.slice(0, 4)).map(
              (item) => (
                <Col md={6} key={item.id}>
                  <motion.div
                    className="advice-item"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="advice-card"
                      onClick={() => handleAdviceClick(item.id)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="advice-image"
                      />
                      <div className="advice-content">
                        <h5
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {item.title}
                        </h5>
                        <ul className="sub-items-list">
                          {item.subItems.map((sub) => (
                            <li
                              key={sub.id}
                              onClick={(e) => {
                                e.stopPropagation(); // Ngăn việc bấm vào subItem kích hoạt advice chính
                                handleSubItemClick(sub.id);
                              }}
                            >
                              {sub.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              )
            )}
          </Row>
        </motion.div>
        {!showAllAdvice ? (
          <div className="text-center mt-3">
            <Button
              className="button-view"
              onClick={() => setShowAllAdvice(true)}
            >
              View All Articel
            </Button>
          </div>
        ) : (
          <div className="text-center mt-3">
            <Button
              className="button-view"
              onClick={() => setShowAllAdvice(false)}
            >
              Hide
            </Button>
          </div>
        )}
      </Container>
    </motion.div>
  );
};

export default HomePage;
