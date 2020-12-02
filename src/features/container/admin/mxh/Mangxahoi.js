import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table } from 'antd';
const columns = [
    {
        title: 'Mạng xã hội',
        dataIndex: 'name',
    },
    {
        title: 'Icon',
        dataIndex: 'icon',
    },
    {
        title: 'Màu',
        dataIndex: 'color',
    },
    {
        title: 'Tình trạng',
        dataIndex: 'status',
    },
    {
        title: 'Action',
        dataIndex: 'action'
    }
];
var sts = 1;
const data = [
    {
        key: '1',
        name: <div><Link>John Brown</Link></div>,
        status: <div className="action">{sts === 1 ? <Link><i className="far fa-thumbs-up "></i></Link> : <Link><i className="far fa-thumbs-down "></i></Link>}</div>,
        action: <div className="action"><Link><i className="far fa-edit mr-4"></i></Link><Link><i className="far fa-trash-alt"></i></Link></div>
    }
];
function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}
export class Mangxahoi extends Component {
    render() {
        return (
            <div id="admin">
                <div className="heading">
                    <h4>Mạng xã hội</h4>
                    <div className="hr"></div>
                </div>
                <div className="content">
                    <div className="add">
                        <Link to={`${this.props.url}/themmangxahoi`}>
                            <Button variant="outlined" color="secondary"><i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới</Button>
                        </Link>
                    </div>
                    <Table columns={columns} dataSource={data} onChange={onChange} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Mangxahoi)