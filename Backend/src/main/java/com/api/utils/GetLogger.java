package com.api.utils;

import org.apache.log4j.DailyRollingFileAppender;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PatternLayout;

public class GetLogger {
	
	public static Logger setLogger(Class class1) {
		
		// creates pattern layout
        PatternLayout layout = new PatternLayout();
        String conversionPattern = "\n%-7p %d [%t] %c %x - %m%n";
        layout.setConversionPattern(conversionPattern);
 
        // creates daily rolling file appender
        DailyRollingFileAppender rollingAppender = new DailyRollingFileAppender();
        rollingAppender.setFile(WebConstant.LogFilePath);
        rollingAppender.setDatePattern("'.'yyyy-MM-dd");
        rollingAppender.setLayout(layout);
        rollingAppender.activateOptions();
 
        // configures the root logger
        Logger rootLogger = Logger.getRootLogger();
        rootLogger.setLevel(Level.INFO);
        rootLogger.addAppender(rollingAppender);
        
        return Logger.getLogger(class1);
        
	}

	}