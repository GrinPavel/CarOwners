import {useCallback, useRef, useState} from 'react';

import {useFocusEffect} from '@react-navigation/native';

import VehiclesService from '../../../services/vehicles';

import {flashMessage} from '../../../core/utils';

import HistoryView from './historyView';

const HistoryContainer = (): JSX.Element => {
  const flashRef = useRef();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const loadHistory = async () => {
    setLoading(true);
    try {
      const {data} = await VehiclesService.getAllHistory();
      if (data) {
        setItems(data.history);
      }
    } catch (err) {
      flashMessage({message: 'Error!', type: 'danger'});
    }
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadHistory();
    }, []),
  );

  return <HistoryView flashRef={flashRef} items={items} loading={loading} />;
};

export default HistoryContainer;
