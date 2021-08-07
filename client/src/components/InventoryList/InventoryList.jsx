import "../InventoryList/InventoryList.scss";
import search from "../../assets/Icons/search-24px.svg";
import Inventory from "../../pages/Inventory";
import sort from "../../assets/Icons/sort-24px.svg";
import React, { Component } from "react";
import axios from "axios";

// function InventoryList() {
export default class InventoryList extends Component {
  state = {
    inventoryList: null,
  };

  componentDidMount() {
    axios.get("http://localhost:8081/warehouses").then((res) => {
      console.log(res.data);
      this.setState({
        inventoryList: res.data,
      });
    });
  }

  render() {
    console.log(this.state.inventoryList);
    return (
      <div>
        {this.state.inventoryList && this.state.inventoryList && (
          <div>
            <section className="head">
              <h3 className="head__title">Inventory</h3>
              <form className="head__form">
                <label className="head__search" htmlFor="search"></label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  value="Search ... "
                  className="head__search-box"
                ></input>
                <button className="head__button">+ Add New Item</button>
              </form>
            </section>
            <ul className="filter">
              <li className="filter__item">
                INVENTORY ITEM{" "}
                <img src={sort} alt="sort" className="filter__sort" />
              </li>
              <li className="filter__category">
                CATEGORY <img src={sort} alt="sort" className="filter__sort" />
              </li>
              <li className="filter__status">
                STATUS <img src={sort} alt="sort" className="filter__sort" />
              </li>
              <li className="filter__qty">
                QTY <img src={sort} alt="sort" className="filter__sort" />
              </li>
              <li className="filter__warehouse">
                WAREHOUSE <img src={sort} alt="sort" className="filter__sort" />
              </li>
              <li className="filter__actions">ACTIONS</li>
            </ul>
            <Inventory inventoryarr={this.state.inventoryList} />
            {/* INVENTORY ITEMS */}
          </div>
        )}
      </div>
    );
  }
}
