import React from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import classes from './StoreItem.module.css';

const StoreItem = ({ data }) => {
  let arr = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus provident assumenda, culpa possimus voluptates nam veritatis minima iste facere rem, blanditiis optio adipisci quaerat quae? Iusto mollitia sequi molestiae ex id ab obcaecati, fuga qui alias aut, nisi sapiente perspiciatis quas itaque. Ad modi dolores eaque, quis, excepturi nobis fuga enim voluptatem pariatur praesentium alias perspiciatis dignissimos, magni necessitatibus voluptas architecto voluptate? Officia vitae sequi praesentium quaerat. Voluptatum reiciendis ipsam mollitia eligendi quibusdam vitae pariatur deleniti, quam, eum, explicabo aut minus aliquid. Dolores quae aspernatur optio, doloremque neque laudantium eligendi vel laborum omnis fugiat odio nisi delectus iure! Quibusdam dolor sunt, eos dolorem quo fugit illo laudantium iusto? Totam maiores repudiandae neque provident itaque officiis labore blanditiis esse eveniet modi, reprehenderit adipisci incidunt ad numquam cumque cum ratione quibusdam nobis doloremque nisi aspernatur? Dolores facilis itaque quas, provident rem quidem! Id, debitis rerum. Commodi temporibus iste, sequi ipsam dolor nobis. Asperiores, officiis. Nemo ex odit impedit cupiditate, harum consectetur! Quidem eius labore, eligendi architecto minima nostrum, molestiae quas harum consequuntur, illo laborum ut? Totam, rem quam perferendis voluptas accusantium ea cumque fuga ad vero reiciendis facilis distinctio deleniti quae quo exercitationem enim adipisci impedit mollitia consectetur? Sequi adipisci pariatur iure!`;
  arr = arr.split(` `);

  console.group(`FUNC`);
  console.time(`func`);
  const random = (a, b) => Math.random() - 0.5;
  arr = arr.sort((a, b) => Math.random() - 0.5);
  // arr.length = 1;
  console.log(arr[0]);
  console.timeEnd(`func`);
  console.groupEnd(`FUNC`);

  console.group(`LENGTH`);
  console.time(`length`);
  const i = arr.length;
  const random2 = Math.floor(Math.random() * i);
  console.log(arr[random2]);
  console.timeEnd(`length`);
  console.groupEnd(`LENGTH`);

  console.group(`SET`);
  console.time(`length`);
  const newArr = new Set(arr);
  console.log(newArr.random2);
  console.timeEnd(`length`);
  console.groupEnd(`SET`);

  return (
    <li className={classes.todo}>
      <h2>{data.title}</h2>
      <span>{data.description}</span>
      <p>${data.cost}</p>

      <div className={classes.controls}>
        <Controls data={data} />
      </div>
    </li>
  );
};

StoreItem.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default StoreItem;
