import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Table, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 2000; // 10: (how many coins there will be displayed), 
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  const columns = [
    {
      title: 'Coins',
      dataIndex: 'iconUrl',
      key: 'iconUrl',
      render: (iconUrl, record) => (
        <Link to={`/crypto/${record.uuid}`}>
          <img src={iconUrl} alt='' width={25} style={{ marginRight: 10 }} />
          {record.name}
        </Link>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => millify(price),
    },
    {
      title: 'Market Cap',
      dataIndex: 'marketCap',
      key: 'marketCap',
      render: (marketCap) => millify(marketCap),
    },
    {
      title: '24h Change',
      dataIndex: 'change',
      key: 'change',
      render: (change) => {
        const changeValue = parseFloat(change);
        const positiveChange = changeValue >= 0;
        const color = positiveChange ? 'green' : 'red';
        return (
          <span style={{ color }}>
            {positiveChange ? '+' : ''}
            {millify(changeValue)}
          </span>
        );
      },
    },
  ];

  const handleRowClick = (record) => {
    window.location.href = `/crypto/${record.uuid}`;
  };

  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input
            style={{ borderRadius: '8px' }}
            placeholder='Search Cryptocurrency'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Table
        dataSource={cryptos}
        columns={columns}
        pagination={{ defaultPageSize: 20, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }}
        style={{ marginTop: 20 }}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        rowKey={(record) => record.uuid}
      />
    </>
  );
};

export default Cryptocurrencies;
