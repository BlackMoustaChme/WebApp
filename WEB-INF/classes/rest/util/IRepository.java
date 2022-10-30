package rest.util;

import java.util.ArrayList;

public interface IRepository<T, I> {

    T get(I index);

    ArrayList<T> getAll();

    void add(T obj);

    void update(I index, T obj);

    void remove(I index);

}
