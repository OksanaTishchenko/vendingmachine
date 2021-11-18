import React, { useState } from "react";
import "./Machine.scss";
import { useSelector, useDispatch } from "react-redux";
import { add_cash, clear_cash } from "../../store/reducers/user";

function Machine() {
  const goods = useSelector(state => state.goods.goods);
  const cash = useSelector(state => state.user.cash);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [currentGoodTitle, setCurrentGoodTitle] = useState("");
  const [money, setMoney] = useState(0);
  const [takeGoods, setTakeGoods] = useState(false);

  const addCashHandler = () => {
    dispatch(add_cash(+inputValue));
    setInputValue("");
    setTakeGoods(false);
    setMoney(0);
  }

  const buyGood = (good) => {
    if (cash === good.price) {
      dispatch(clear_cash());
    }
    if (cash > good.price) {
      dispatch(clear_cash());
      setMoney(cash - good.price);
    }
    setCurrentGoodTitle(good.title);
    setTakeGoods(true);
  }

  const buyAgain = () => {
    setTakeGoods(false);
    setMoney(0);
  }

  const takeGood = () => (
    <div className="take-good">
      <h4 className="take-good__title">Take your {currentGoodTitle}</h4>
      {
        money ? <p className="take-good__cash">And your cash {money} UAH</p> : null
      }
      <button onClick={buyAgain} className="take-good__button">Buy again</button>
    </div>
  )

  return (
    <div>
      <div className="container">
        <div className="machine">
          <div className="machine__body">
            <div className="machine__goods goods">
              <div className="goods__container">
                <ul className="goods__list">
                  {goods.map(item => (
                    <li key={item.id} className="goods__item good">
                      <div className="good__image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="good__info">
                        <h4>{item.title}</h4>
                        <span>{item.price}</span>
                      </div>
                      <div className="good__quantity">
                      </div>
                      <button disabled={!(cash >= item.price)} onClick={() => buyGood(item)} className="good__buy">Buy</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="machine__buttons buttons">
              <div className="buttons__container">
                <form className="buttons__form form" onSubmit={e => e.preventDefault()}>
                  <div className="form__input-field">
                    <label htmlFor=""></label>
                    <input value={inputValue} className="form__input" type="number" onChange={e => setInputValue(+e.target.value)} placeholder="Insert your money" />
                  </div>
                  <button onClick={addCashHandler} className="buttons__cash">Add cash</button>
                  <div className="buttons__deposite">You have: <br />{cash} UAH</div>
                </form>

                {
                  takeGoods &&
                  takeGood()
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Machine;