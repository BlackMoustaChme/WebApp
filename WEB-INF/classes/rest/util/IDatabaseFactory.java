package rest.util;

public interface IDatabaseFactory {
    public IDatabase createInstance(String source);
}
