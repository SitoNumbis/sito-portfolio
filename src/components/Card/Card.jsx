import PropTypes from "prop-types";

// @nextui-org
import { Card as NextCard, Image, Text } from "@nextui-org/react";

const Card = (props) => {
  const { onClick, text, more } = props;
  return (
    <NextCard
      isPressable
      isHoverable
      onPress={onClick}
      variant="bordered"
      css={{
        width: "250px",
        marginRight: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column !important",
      }}
    >
      <Image
        width={320}
        height={180}
        src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
        alt="Default Image"
        objectFit="cover"
      />
      <NextCard.Body
        css={{ display: "flex", flexDirection: "column !important" }}
      >
        <Text css={{ marginLeft: "10px" }}>{text}</Text>
        <Text css={{ marginLeft: "10px" }}>{more}</Text>
      </NextCard.Body>
    </NextCard>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
};

export default Card;
