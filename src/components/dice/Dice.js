import { DiceFace } from './diceStyle';

export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#43aa8b' : 'white',
  };

  return (
    <div className="dice-face" style={styles} onClick={props.holdDice}>
      {props.showNumbers ? (
        <h2 className="dice-num">{props.value}</h2>
      ) : (
        <DiceFace value={props.value} />
      )}
    </div>
  );
}
