package demo.personal.com.reactnativedemo;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class DialogUtils extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public DialogUtils(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Dialog";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    /**
     * 这是暴露个ReactNative调用的方法
     * @param title dialog标题
     * @param content dialog内容
     * @param leftText dialog左边按钮文字
     * @param rightText dialog右边按钮文字
     */
    @ReactMethod
    public void showDialog(String title,String content,String leftText,String rightText) {
        new AlertDialog.Builder(getCurrentActivity()).setTitle(title).setMessage(content).setNegativeButton(leftText, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                dialog.dismiss();
            }
        }).setPositiveButton(rightText, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(getReactApplicationContext(), "确定", Toast.LENGTH_SHORT).show();
            }
        }).show();
    }
}
