import Choices from 'choices.js';
import React, { useEffect, useRef, useState } from 'react'
import { Card, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, Row } from 'react-bootstrap'
import { BsFileImageFill } from 'react-icons/bs';
import { FaAngleDown, FaCaretDown } from 'react-icons/fa'
import { Uploader, Button } from 'rsuite';
import "rsuite/dist/rsuite.css";

const SingleProduct = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    const selectRef = useRef(null);

    useEffect(() => {
        const choices = new Choices(selectRef.current);

        return () => {
            choices.destroy();
        };
    }, []);

    return (
        <section className='single-product'>
            <Row>
                <Col md={8}>
                    <Row>
                        <Col md={9}>
                            <Card>
                                <h3>Category</h3>
                                <label>Product Category</label>
                                <div className='category-drop'>
                                    <Dropdown>
                                        <DropdownToggle>
                                            Select a category <FaCaretDown />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem></DropdownItem>
                                            <DropdownItem></DropdownItem>
                                            <DropdownItem></DropdownItem>
                                            <DropdownItem></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <div className="active-pro">
                                <Card>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <div className="toggle-switch">
                                            <div className={`toggle-knob ${isChecked ? 'active' : ''}`} />
                                        </div>
                                    </label>
                                    <h3 className='mb-0'>active product</h3>
                                </Card>
                            </div>
                        </Col>

                    </Row>
                    <div className='inventory'>
                        <Card>
                            <h3>Inventory</h3>
                            <Row>
                                <Col md={6}>
                                    <label htmlFor="">SKU</label>
                                    <input type="text" placeholder='Type product SKU here. . .' />
                                </Col>
                                <Col md={6}>
                                    <label htmlFor="">Quantity</label>
                                    <input type="text" placeholder='Type product quantity here. . .' />
                                </Col>
                                <Col md={6}>
                                    <label htmlFor="">HSN Number</label>
                                    <input type="text" placeholder='Type HSN Number. . .' />
                                </Col>
                                <Col md={6}>
                                    <label htmlFor="">GST%</label>
                                    <input type="text" placeholder='Type GST. . .' />
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div className="general-information">
                        <Card>
                            <h3>General Information</h3>
                            <label htmlFor="">Product Name</label>
                            <input type="text" placeholder='Type product name here. . .' />
                            <label htmlFor="">Description</label>
                            <textarea placeholder='Type product description here. . .' />
                            <label htmlFor="">Features</label>
                            <textarea placeholder='Type product description here. . .' />
                            <label htmlFor="">Benefits</label>
                            <textarea placeholder='Type product Benefits here. . .' />
                        </Card>
                    </div>
                    <div className="pricing">
                        <Card>
                            <h3>Pricing</h3>
                            <label htmlFor="">Regular Price</label>
                            <input type="text" placeholder='Type base price here. . .' />
                            <Row>
                                <Col md={6} className='col'>
                                    <label htmlFor="">MRP price</label>
                                    <input type='text' placeholder='MRP price' />
                                </Col>
                                <Col md={6} className='col'>
                                    <label htmlFor="">Discount price</label>
                                    <input type='text' placeholder='discount price' />
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div className="Weight">
                        <Card>
                            <h3>Weight</h3>
                            <Row>
                                <Col md={6} className='col'>
                                    <label htmlFor="">Weight</label>
                                    {/* <input type='text' placeholder='MRP price' /> */}
                                    <Dropdown>
                                        <DropdownToggle>
                                            Gram <FaAngleDown />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Gram</DropdownItem>
                                            <DropdownItem></DropdownItem>
                                            <DropdownItem></DropdownItem>
                                            <DropdownItem></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                                <Col md={6} className='col'>
                                    <select ref={selectRef}>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>

                                </Col>


                            </Row>
                        </Card>
                    </div>
                    <div className="tag">
                        <Card>
                            <h3>Tag</h3>

                            <label htmlFor="">Add Tag</label>
                            {/* <input type='text' placeholder='MRP price' /> */}
                            <Dropdown>
                                <DropdownToggle>
                                    Gram <FaAngleDown />
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Gram</DropdownItem>
                                    <DropdownItem></DropdownItem>
                                    <DropdownItem></DropdownItem>
                                    <DropdownItem></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Card>
                    </div>
                </Col>
                <Col md={4}>
                    <Card>
                        <h3>Media</h3>
                        <label htmlFor="">Photo</label>
                        <div className='file-upload'> 
                        <Uploader listType="picture-text"
                            multiple={false}  // allow single image only
                            autoUpload={false} action="//jsonplaceholder.typicode.com/posts/">
                            <Button>
                                <div className='img-logo'>
                                    <BsFileImageFill  size={18}/>
                                </div>
                                <div>
                                <label className='d-block' htmlFor="">Drag and drop image here, or click add image</label>
                                </div>
                                <div className='add-img-btn'>
                                    <button>Add Image</button>
                                </div>
                                </Button>
                        </Uploader>

                        <input type="file" />
                        </div>

                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default SingleProduct