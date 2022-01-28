import React, { Component } from 'react';
import Navigation from '../Header/Navigation';
import DISHES from '../../data/Dishes';
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';
import Comments from '../../data/Comments';
import { Modal, CardGroup, ModalBody, Card, CardColumns, ModalFooter, Button } from 'reactstrap';
import { addCommentActionOBJ, fetchDishes } from '../../redux/actionCreators';
import { connect } from 'react-redux'; // need to import 
import Loading from './Loading';

const mapStateToProps = state => {
      // console.log("Home mapStateToProps", state)
      return {
            dishes: state.dishes,
            comments: state.comments

      }
}
const mapDispatchToProps = dispatch => {
      return {
            addComment: (dishId, rating, author, comment) => dispatch(addCommentActionOBJ(dishId, rating, author, comment)),
            fetchDishes: () => dispatch(fetchDishes())
            // ,
            // More funtions can be retten here
      }
}

class Menu extends Component {
      state = {
            selctedDish: null,
            modelOpen: false
      }

      dishSelect = (dish) => {
            this.state.selctedDish = dish;
            this.setState({
                  modelOpen: !this.state.modelOpen
            });
      }

      toggleModel = () => {
            this.setState({
                  modelOpen: !this.state.modelOpen
            })
      }
      componentDidMount() {
            this.props.fetchDishes();

      }




      render() {
            document.title = "Menu";
            console.log(this.props.dishes.isLoading);

            if (this.props.dishes.isLoading) {
                  return (
                        <Loading />
                  );
            }
            else {
                  let seletedADish = null;
                  // if user clicks on a dish,
                  // then this variable is not null

                  if (this.state.selctedDish) {
                        const comments = this.props.comments.filter((comment) => {
                              return comment.dishId === this.state.selctedDish.id;
                        })
                        seletedADish = <DishDetails
                              dish={this.state.selctedDish}
                              comments={comments}
                              addComment={this.props.addComment} />
                  }
                  let dishes = []

                  try {
                        dishes = this.props.dishes.dishes.dishes.map((item) => {

                              return (
                                    <MenuItem dish={item} key={item.id}
                                          function={() => this.dishSelect(item)}
                                    /> // evry dish has an id.
                              );
                        }
                        );
                  } catch (e) {
                        console.log("Till Now No obj");
                  }

                  return (
                        <div className='container'>
                              <div className='row' >
                                    <CardGroup>
                                          {dishes}
                                    </CardGroup>
                                    <Modal isOpen={this.state.modelOpen}>
                                          <ModalBody>
                                                {seletedADish}
                                                {/* sending the one obj that selected */}

                                          </ModalBody>
                                          <ModalFooter>
                                                <Button color="secondary" onClick={this.toggleModel}>
                                                      Close
                                                </Button>
                                          </ModalFooter>

                                    </Modal>

                              </div>
                        </div>
                  );
            }


      }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
