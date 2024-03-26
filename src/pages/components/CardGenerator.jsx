import React from "react";

import styles from "../creaPizza/creaPizza.module.scss";

const CardGenerator = ({
  title,
  options,
  selectedOption,
  handleClick,
  handleRemove,
}) => {
  // const selectedOptionArray = Array.isArray(selectedOption)
  //   ? selectedOption
  //   : [];
  console.log("selectedOption:", selectedOption);
  // console.log("selectedOptionArray:", selectedOptionArray);
  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <h2>{title}</h2>
        {options &&
          options.map((option) => (
            <div key={option.id} className={styles.option}>
              <p>
                {option.nome}
                {option.ingredienti && (
                  <p className={styles.smallP}>
                    Ingredienti: {option.ingredienti}
                  </p>
                )}
              </p>
              {/* {selectedOption === option.id && (
                <p>
                  {" "}
                  <FaCheckCircle style={{ fontSize: "30px" }} />
                </p>
              )}{" "} */}
              <div>
                <input
                  className={styles.btn_option}
                  type="button"
                  value="+"
                  onClick={() => handleClick(option.id)}
                />
                {/*  */}

                {(selectedOption === option.id ||
                  (Array.isArray(selectedOption) &&
                    selectedOption.includes(option.id))) && (
                  <input
                    className={styles.btn_option}
                    type="button"
                    value="-"
                    onClick={() => handleRemove(option.id)}
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardGenerator;
