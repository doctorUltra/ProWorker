import React, { Component } from 'react';
/**
 * We need to partition the Waterfall images in to N sets where N is the number
 * of columns dictated by the organiser, and the sum of numbers in each set is almost
 * equal.
 *
 * This is a fast greedy solution to that problem https://stackoverflow.com/q/6669460.
 */
class Partition {
  constructor(list) {
    this.parts = [];
    this.list = list;
  }

  add(item) {
    this.parts.push(item);
  }

  total() {
    return this.parts.reduce((total, id) => total + this.list[id].height, 0);
  }
}

class Parts {
  constructor(columnCount, list, order) {
    this.columnCount = columnCount;
    this.store = [...new Array(this.columnCount)];
    this.list = list;
    this.byHeight = order.slice().sort((a, b) => list[b].height - list[a].height);
  }

  partition() {
    this.store = this.store.map((elem, index) => {
      const part = new Partition(this.list);

      part.add(this.byHeight[index]);
      return part;
    });

    for (let j = this.columnCount; j < this.byHeight.length; j += 1) {
      const lowestSumIndex = this.store.reduce((accum, partition, index) => {
        if (this.store[accum].total() > this.store[index].total()) {
          // eslint-disable-next-line no-param-reassign
          accum = index;
        }
        return accum;
      }, 0);

      this.store[lowestSumIndex].add(this.byHeight[j]);
    }

    return this.store.reduce((accum, item) => accum.concat(item.parts), []);
  }
}

class Waterfall extends Component {
  static defaultProps = {
    columnCount: 3,
    columnGap: 12,
  };

  constructor(props) {
    super(props);
    this.blocks = {};
    this.state = {
      rendered: false,
      order: this.props.order,
    };
  }
  onLoad = (elem, id) => {
    if (!this.blocks.hasOwnProperty(id)) {
      this.blocks[id] = {
        height: 0,
        elem,
        id,
      };
    }

    const block = this.blocks[id];

    if (elem.complete) {
      block.height = elem.getBoundingClientRect().height;

      if (Object.keys(this.blocks).length === this.props.order.length) {
        const order = new Parts(this.props.columnCount, this.blocks, this.props.order).partition();

        this.setState({
          rendered: true,
          order,
        });
      }
    }
  };
  render() {
    const { list, columnCount } = this.props;
    const { order, rendered } = this.state;
    const style = { columnCount: columnCount };
    return (
      <div className="waterfall" style={style}>
        {order.map(itemId => {
          const image = list.find(i => i.id === itemId);
          if (!image) {
            return null;
          }
          const { id, url } = image;

          return (
            <img
              onLoad={(e) => this.onLoad(e.target, id)}
              src={url}
              alt={id}
              key={id}
            />
          );
        })}
      </div>
    );
  }
}

export default Waterfall;