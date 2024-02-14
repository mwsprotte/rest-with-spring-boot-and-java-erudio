package br.com.erudio.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class MyFileNoFoundException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public MyFileNoFoundException(String ex) {
        super(ex);
    }

    public MyFileNoFoundException(String ex, Throwable cause) {
        super(ex, cause);
    }

}
