package rest.service;

import java.security.SecureRandom;
import java.security.Key;
import javax.crypto.spec.SecretKeySpec;

public class TokenKey {

        private Key key;

        public TokenKey() {
//      jqpwbdyndnmctygspruzoupaulgvboyzfnqqgrvuvoozhuqnowaftfyxztdykozqsugcqjvdaifzggdyxcgmaeeuvwxunvqlbaouuajozvlbtsqobgujguuqcxjxazqktphamhqvxiblsipgpgdsmzecimvlemnmztwsvwmufofzogznpncfdkuexqnamgpwwxgjsqtkheplrejwzvcpgvoynwoqoedxkkdvedzgcphtbmbjylwpqgndswzqxctg
        SecureRandom sr = new SecureRandom();//переделать вставив статичную конструкцию из строки в 256 символов (верхняя строка)
        byte[] keyBytes = new byte[256];
        sr.nextBytes(keyBytes);
        key = new SecretKeySpec(keyBytes,"HmacSHA256");
    }

        public Key getKey() {
        return key;
    }
}
