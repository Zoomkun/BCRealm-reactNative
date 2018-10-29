package com.bcrealmapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.getui.reactnativegetui.GetuiPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.theweflex.react.WeChatPackage;
import com.netease.im.RNNeteaseImPackage;
import com.imagepicker.ImagePickerPackage;
import cn.reactnative.httpcache.HttpCachePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.netease.im.IMApplication;
import com.bcrealmapp.android_upgrade.UpgradePackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new UpgradePackage(),
          new MainReactPackage(),
            new GetuiPackage(),
            new RNDeviceInfo(),
            new WeChatPackage(),
            new RNNeteaseImPackage(),
            new ImagePickerPackage(),
            new HttpCachePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    IMApplication.init(this, MainActivity.class,R.drawable.ic_stat_notify_msg,null);
    SoLoader.init(this, /* native exopackage */ false);
  }
}
