import s from "./TransactionList.module.css";
import clsx from "clsx";

const TransactionList = ({ transaction }) => {
  return (
    <div>
      <table className={s.table}>
        <thead className={s.name}>
          <tr className={s.transactionGraph}>
            <th className={s.itemName}>Type</th>
            <th className={s.itemName}>Amount</th>
            <th className={s.itemName}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transaction.map((transaction, index) => (
            <tr
              className={clsx(s.transactionGraph, index % 2 === 1 && s.isGray)}
              key={transaction.id}
            >
              <td className={s.transactionTypeItem}>{transaction.type}</td>
              <td className={s.transactionItem}>{transaction.amount}</td>
              <td className={s.transactionItem}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
