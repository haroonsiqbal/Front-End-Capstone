import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import { Button, Jumbotron, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import './Search.css'


class SearchForm extends Component {
    state = {
        neighborhood: "",
        outlets: 0
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    searchNewLocation = evt => {
        evt.preventDefault();
        const currentUser = JSON.parse(sessionStorage.getItem("credentials"))
            this.setState({ loadingStatus: true });
            const neighborhood = this.state.neighborhood
            console.log(neighborhood)
            const outlets = parseInt(this.state.outlets)
            console.log(outlets)

            this.props.getSearchResults(neighborhood, outlets)
        
    };

    render(){
        return(
        <div className="search-form-container">
            <h2>Search</h2>
            <Form>
                <FormGroup>
                       <Input
                        type="select"
                        required
                        onChange={this.handleFieldChange}
                        id="neighborhood"
                        placeholder="Neighborhood">
                        <option>Neighborhood</option>
                        <option>Downtown</option>
                        <option>Germantown</option>
                        <option>East Nashville</option>
                        <option>Charlotte Pike</option>
                        <option>8th Avenue</option>
                        <option>12 South</option>
                        <option>The Gulch</option>
                        <option>West End</option>
                        <option>Hillsboro Village</option>
                        <option>Midtown</option>
                        <option>Wedgewood-Houston</option>
                        </Input>
                </FormGroup>
                <FormGroup>     
                        <Input
                        type="select"
                        required
                        onChange={this.handleFieldChange}
                        id="outlets"
                        placeholder="Minimum Outlets"
                        >
                        <option>Minimum Outlets</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>   
                        </Input>
                </FormGroup>        
                        <Button
                        color="danger"
                        type="button"
                        onClick={this.searchNewLocation}
                        >SUBMIT</Button>
            </Form>
        </div>
        )
    }
}

export default SearchForm